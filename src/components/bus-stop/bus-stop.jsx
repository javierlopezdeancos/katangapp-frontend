import React from 'react';

var BusRoute = require('../bus-route/bus-route');

var busRoutes = [new BusRoute, new BusRoute];

var BusStop = React.createClass ({
  render: function () {
    return (
      <article className="ktg-bus-stop">
        <header className="ktg-bus-stop__header">
          <h2 className="ktg-bus-stop__title">Bus Stop</h2>
        </header>
        <table className="ktg-bus-stop__routes">
          <thead>
            <tr>
              <th colSpan="2">
                  <span className="ktg-bus-stop__description">Avda. de Barber</span>
                  <span className="ktg-bus-stop__distance">300 meters</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {busRoutes.map(function(busRoute, i){
              return <BusRoute key={i} />;
            })}
          </tbody>
        </table>
      </article>
    );
  }
});

module.exports = BusStop;
