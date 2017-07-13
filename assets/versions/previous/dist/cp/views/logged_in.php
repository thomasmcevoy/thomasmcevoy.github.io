<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <style>
      * {
        box-sizing: border-box;
      }
      body {
        margin: 2.625em auto;
        max-width: 48em;
        color: #222;
        font-family: futura;
        text-align: center;
        letter-spacing: .025em;
      }
      h1 {
        margin: 0;
        font-size: 3em;
        letter-spacing: .075em;
      }
      h2 {
        margin: 1.375em 0 0;
        font-size: .875em;
        letter-spacing: .55em;
      }
      input {
        margin: .125rem;
        border: none;
        resize: none;
        font-family: futura;
        text-align: center;
      }
      button {
        font-family: futura;
      }
      .month {
        display: block;
        margin: 2.25em auto .75em;
        font-size: 1.875em;
        letter-spacing: .125em;
      }
      .show {
        position: relative;
        display: inline-block;
        width: 16em;
        padding: .125em .25em 1.5em;
        border: solid 2px white;
      }
      .show:hover {
        border-color: #eee;
      }
      .show input {
        width: 100%;
      }
      .show__day {
        height: 1.25em;
        font-size: 7em;
        font-weight: 100;
      }
      .show__venue {
        font-size: 1.25em;
        color: #bf9600;
      }
      .show__band,
      .show__time {
        font-size: .8125em;
      }
      .show__remove {
        display: none;
        position: absolute;
        top: 0;
        right: 0;
        padding: 0 .25em 0 .375em;
        width: 1.25em;
        color: #ddd;
        font-size: 1.25em;
        transition: .2s;
      }
      .show:hover .show__remove {
        display: block;
      }
      .show__remove:hover {
        cursor: pointer;
        color: #222;
      }
      .new-show {
        position: fixed;
        bottom: 0;
        left: 0;
        border-top: solid thin #bbb;
        padding: .5em .5em .625em;
        width: 100%;
        background-color: #eee;
      }
      .new-show input {
        border: thin solid #eee;
        margin: 0 .5em;
        padding: .375em;
        font-size: .8125em;
      }
      .new-show button {
        margin-left: 1.25em;
        padding: .675em 1em;
        position: relative;
        top: -1px;
      }
      .new-show button:hover {
        transition: .2s;
        border-top: none;
        border-bottom: none;
        background-color: #bbb;
        cursor: pointer;
      }
      .new-show__day {
        width: 4em;
      }
      .new-show__venue,
      .new-show__band {
        width: 20em;
      }
      .new-show__time {
        width: 10em;
      }
      .next-month {
        margin-right: 10em;
      }
    </style>
    <script src="//fb.me/react-0.13.0-rc1.js"></script>
    <script src="//fb.me/JSXTransformer-0.13.0-rc1.js"></script>
    <script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
  </head>
  <body>
    <h1> Control Panel </h1>
    <div id="editShows"></div>
    <script type="text/jsx">
      var currentDate = new Date();
      var year = currentDate.getYear() + 1900;
      var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                    'August', 'September', 'October', 'November', 'December'];

      Date.prototype.addDays = function(days) {
        var dat = new Date(this.valueOf());
        dat.setDate(dat.getDate() + days);
        return dat;
      }

      function sortByKey(array, key) {
        return array.sort(function(a, b) {
          var x = a[key]; var y = b[key];
          return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
      }

      function getDates(month, dayOfWeek){
        var datesArray = [];
        var startDate = new Date(year, month, dayOfWeek + 1);
        var stopDate = new Date(year, month + 1);
        var currentDate = startDate;
        while (currentDate < stopDate) {
          datesArray.push( new Date(currentDate) );
          currentDate = currentDate.addDays(7);
        }
        return datesArray;
      }

      function getShows(datesArray, venue, band, time){
        var showsArray = [];
        for (var i = 0; i < datesArray.length; i++){
          showsArray[i] = {
            day: datesArray[i].getDate(),
            venue: venue,
            band: band,
            time: time
          };
        }
        return showsArray;
      }

      var ShowsApp = React.createClass({
        getInitialState: function(){
          return {
            month: 'Month',
            shows: []
          }
        },
        componentDidMount: function(){
          this.autoSelectInputs();
          $.getJSON('shows.json', function(data){
            this.setState({
              month: data.month,
              shows: data.shows
            });
          }.bind(this));
        },
        componentDidUpdate: function(){
          this.autoSelectInputs();
        },
        autoSelectInputs: function(){
          var inputs = document.querySelectorAll('input');
          for (var i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener('click', function(){
              this.select();
            }, false);
          }
        },
        addShow: function(show){
          this.setState({
            shows: sortByKey( this.state.shows.concat([show]), 'day' )
          });
        },
        removeShow: function(show){
          this.state.shows.splice( this.state.shows.indexOf(show), 1 );
          this.setState({
            shows: this.state.shows
          });
        },
        updateShow: function(show, index) {
          this.state.shows.splice( index, 1, show );
          this.setState({
            shows: sortByKey( this.state.shows, 'day' )
          });
        },
        sortShows: function(){
          this.setState({
            shows: sortByKey( this.state.shows, 'day' )
          });
        },
        updateMonth: function(month){
          this.setState({
            month: month
          });
        },
        nextMonthWithDefaults: function(){
          var nextMonth = parseInt(this.state.month, 10) + 1;
          var robertDates = getDates(nextMonth, 0);
          var robertShows = getShows(robertDates, 'ROBERT', 'SOLO PIANO', '6:30–9:30 PM');
          var snmDates = getDates(nextMonth, 1);
          var snmShows = getShows(snmDates, 'SLEEP NO MORE', 'MANDERLEY HOUSE BAND', '9 PM–12 AM');
          var allShows = robertShows.concat(snmShows);
          this.setState({
            month: nextMonth,
            shows: sortByKey(allShows, 'day')
          });
        },
        saveChanges: function() {
          $.post(
            'writefile.php',
            JSON.stringify(this.state)
          );
        },
        render: function(){
          return (
            <div>
              <h2> EDIT SHOWS </h2>
              <ShowsList month={months[this.state.month]} shows={this.state.shows} updateMonth={this.updateMonth} updateShow={this.updateShow} removeShow={this.removeShow} />
              <AddNewShow save={this.saveChanges} addShow={this.addShow} sortShows={this.sortShows} nextMonth={this.nextMonthWithDefaults} />
            </div>
          )
        }
      });

      var ShowsList = React.createClass({
        handleChange: function(e){
          this.props.updateMonth(e.target.value);
        },
        render: function(){
          var that = this;
          var showNodes = this.props.shows.map(function(show, index){
            return <Show show={show} index={index} updateShow={that.props.updateShow} removeShow={that.props.removeShow} />;
          });
          return (
            <div>
              <input className='month' value={this.props.month} onChange={this.handleChange} />
              {showNodes}
            </div>
          )
        }
      });

      var Show = React.createClass({
        handleChange: function(e){
          this.props.updateShow({
            day: this.refs.day.getDOMNode().value.toUpperCase(),
            venue: this.refs.venue.getDOMNode().value.toUpperCase(),
            band: this.refs.band.getDOMNode().value.toUpperCase(),
            time: this.refs.time.getDOMNode().value.toUpperCase()
          }, this.props.index);
        },
        render: function(){
          return (
            <div className="show">
              <input ref="day" className="show__day" value={this.props.show.day} onChange={this.handleChange} />
              <input ref="venue" className="show__venue" value={this.props.show.venue} onChange={this.handleChange} />
              <input ref="band" className="show__band" value={this.props.show.band} onChange={this.handleChange} />
              <input ref="time" className="show__time" value={this.props.show.time} onChange={this.handleChange} />
              <div className="show__remove" onClick={this.props.removeShow.bind(null, this.props.show)}>×</div>
            </div>
          )
        }
      });

      var AddNewShow = React.createClass({
        getInitialState: function(){
          return {
            day: 'DAY',
            venue: 'VENUE',
            band: 'BAND',
            time: 'TIME'
          }
        },
        handleChange: function(){
          this.setState({
            day: this.refs.day.getDOMNode().value.toUpperCase(),
            venue: this.refs.venue.getDOMNode().value.toUpperCase(),
            band: this.refs.band.getDOMNode().value.toUpperCase(),
            time: this.refs.time.getDOMNode().value.toUpperCase()
          });
        },
        handleKeyDown: function(e){
          if (e.which === 13) {
            this.addShow();
          }
        },
        handleNextMonth: function(){
          this.props.nextMonth();
        },
        addShow: function(){
          this.props.addShow(this.state);
          this.setState({
              day: ''
          });
        },
        render: function(){
          return (
            <div className='new-show'>
              <button className='next-month' onClick={this.handleNextMonth}> Next Month with Defaults </button>
              <input ref="day" className='new-show__day' value={this.state.day} onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
              <input ref="venue" className='new-show__venue' value={this.state.venue} onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
              <input ref="band" className='new-show__band' value={this.state.band} onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
              <input ref="time" className='new-show__time' value={this.state.time} onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
              <button onClick={this.addShow} onKeyDown={this.handleKeyDown}> Add Show </button>
              <button onClick={this.sortShows}> Sort Shows </button>
              <button onClick={this.props.save}> SAVE </button>
            </div>
          )
        }
      });

      React.render(<ShowsApp />, document.getElementById('editShows'));
    </script>
  </body>
</html>

<!-- because people were asking: "index.php?logout" is just my simplified form of "index.php?logout=true" -->
<a href="index.php?logout">Logout</a>
