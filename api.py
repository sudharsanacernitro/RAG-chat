#!/home/sudharsan/myenv/bin/python3
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/users', methods=['GET'])
def get_users():
    return jsonify(users)

@app.route('/api', methods=['POST'])
def add_user():
    new_user = request.json  # Assuming request data is JSON
    print(new_user)
    return jsonify({'message': 'lorem10 hello how are you my courries gets excitment..................................'}), 201

if __name__ == '__main__':
    app.run(debug=True)

