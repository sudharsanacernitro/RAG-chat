#!/home/sudharsan/myenv/bin/python3
from flask import Flask, request, jsonify
import llm

app = Flask(__name__)

@app.route('/api', methods=['POST'])
def add_user():
    try:
        new_user = request.json  # Assuming request data is JSON
        print(new_user)
        
        if 'url' not in new_user or 'query' not in new_user:
            return jsonify({'error': 'Missing required fields'}), 400
        
        db = llm.create_vector_db(new_user['url'])
        response = llm.get_response(db, new_user['query'])
        
        return jsonify({'message': response}), 201
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
