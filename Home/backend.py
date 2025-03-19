from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Home route to serve the HTML page
@app.route('/')
def home():
    return render_template('home.html')

# API endpoint for real-time tracking (mock data)
@app.route('/api/tracking', methods=['GET'])
def get_tracking():
    data = {
        "truck_1": {"location": "Delhi", "status": "On Route"},
        "truck_2": {"location": "Mumbai", "status": "Arrived"},
    }
    return jsonify(data)

# API endpoint for analytics data (mock data)
@app.route('/api/analytics', methods=['GET'])
def get_analytics():
    data = {
        "total_trips": 120,
        "fuel_saved": "5000 liters",
        "optimized_routes": 85,
    }
    return jsonify(data)

# API endpoint for user registration
@app.route('/api/register', methods=['POST'])
def register_user():
    user_data = request.get_json()
    if not user_data or not all(key in user_data for key in ["first_name", "last_name", "email"]):
        return jsonify({"error": "Missing required fields"}), 400
    return jsonify({"message": "User registered successfully", "user": user_data}), 201

if __name__ == '__main__':
    app.run(debug=True)
