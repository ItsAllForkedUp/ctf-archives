import os
import zipfile
import shutil

from app import app
from flask import flash, redirect, render_template, request, url_for, send_from_directory
from flask_login import current_user, login_required
from werkzeug.utils import secure_filename


@app.route('/upload', methods=['GET', 'POST'])
@login_required
def upload():
    if request.method=='POST':
        if 'file' not in request.files:
            flash('No file part', 'danger')
            return redirect(url_for('upload'))
        
        file = request.files['file']
        if file.filename == '':
            flash('No file selected', 'danger')
            return redirect(url_for('upload'))

        if not zipfile.is_zipfile(file):
            flash('The file you provided is not a zip!', 'danger')
            return redirect(url_for('upload'))
        
        filename = secure_filename(file.filename)
        upload_dir = app.config['UPLOAD_FOLDER'] + "/" + filename.rsplit('.', 1)[0]
        try:
            os.makedirs(upload_dir)
        except FileExistsError:
            flash('An extracted zip with this name already exists', 'danger')
            return redirect(url_for('upload'))

        with zipfile.ZipFile(file, "r") as zf:
            for f in zf.infolist():
                with open(os.path.join(upload_dir, f.filename), 'wb') as tf:
                    tf.write(zf.open(f.filename, 'r').read())
                 
        flash(f'Zip sucessfully unzipped. Download it by going to /upload/{filename.rsplit(".", 1)[0]}', 'success')
        return redirect(url_for('upload'))
    else:
        return render_template('upload.html', name=current_user.username)


@app.route('/upload/<dir>', methods=['GET'])
@login_required
def show_unzip(dir):
    path = app.config["UPLOAD_FOLDER"] + "/" + dir
    if os.path.isdir(path):
        files = os.listdir(path)
        return render_template('files.html', name=current_user.username, files=files)
    elif os.path.isfile(path):
        name = dir
        return send_from_directory(f'{app.config["UPLOAD_FOLDER"]}', filename=name, as_attachment=True)
    else:
        flash('That directory does not exist', 'danger')
        return redirect(url_for('upload'))

@app.route('/upload/<dir>/<name>', methods=['GET'])
@login_required
def serve_unzip(dir, name):
    path = f'{app.config["UPLOAD_FOLDER"]}/{dir}/{name}'
    if os.path.isfile(path):
        return send_from_directory(f'{app.config["UPLOAD_FOLDER"]}/{dir}', filename=name, as_attachment=True)
    else:
        flash('That file does not exist', 'danger')
        return redirect(url_for('upload'))


@app.route('/delete', methods=['GET'])
@login_required
def delete_uploads():
    if os.path.isdir(app.config["UPLOAD_FOLDER"]):
        shutil.rmtree(app.config["UPLOAD_FOLDER"])
        flash('Deleted all uploads', 'success')
    else:
        flash('Uploads is already empty', 'warning')
    return redirect(url_for('upload'))