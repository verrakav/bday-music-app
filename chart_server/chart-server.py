from flask import Flask, request, jsonify
import billboard

app = Flask(__name__) # __name__ tells flask where to look for routes & resources

# declares the route to accept GET
@app.route('/top-song', methods=['GET'])

# the handler for that route
def get_top_song():
    date = request.args.get('date') # TODO: make sure the date format in req is correct
    chart = billboard.ChartData('hot-100', date=date)
    top = chart[0]

    # converts the song into a jso to return it
    return jsonify({
        'title': top.title,
        'artist': top.artist,
        'date': chart.date
    })

if __name__ == '__main__':
    app.run(port=5000)