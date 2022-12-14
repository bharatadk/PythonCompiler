import sys

from flask import Flask, render_template, request,url_for,jsonify


app = Flask(__name__)

output = "0"

@app.route("/")
def index():
	return render_template("index.html",output=output)
    
@app.route("/runcode", methods=['POST'])
def runcode():
    print('indise runcode')
    if request.method == "POST":
        codeareadata = request.form['codearea']
        try:
            print('insede try')
            codeareadata =codeareadata.strip()

            with open('code.txt','w') as c:
                c.write(codeareadata)
            print('*'*15)
            print(codeareadata)
            print('*'*15)

            #save original standart output reference

            original_stdout = sys.stdout
            sys.stdout = open('file.txt', 'w') #change the standard output to the file we created

            #execute code

            exec(codeareadata)  #example =>   print("hello world")

            sys.stdout.close()

            sys.stdout = original_stdout  #reset the standard output to its original value

            # finally read output from file and save in output variable

            output = open('file.txt', 'r').read()
            print(output)

        except Exception as e:
            # to return error in the code
            sys.stdout = original_stdout
            output = e


    #finally return and render index page and send codedata and output to show on page

    # return render_template('index.html', code=codeareadata.strip() , output=output)
    return str(output)


if __name__ =='__main__':
	app.run(debug=True)