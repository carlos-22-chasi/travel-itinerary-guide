from flask import Flask

app = Flask(__name__)

# Members API route
@app.route("/members")
def members():
  return {"members": ["Carlos, Chris, SUp"]}

if __name__ == "__main__":
  app.run(debug=True)