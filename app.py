import sys

from flask import Flask, render_template, request,url_for


app = Flask(__name__)
IS_DEV = app.env == 'development'  # FLASK_ENV env. variable

@app.route("/")
def index():
	return render_template("index.html")


if __name__ =='__main__':
	app.run()
