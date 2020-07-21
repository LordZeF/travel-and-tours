import React, { Component } from 'react';
import './TourList.scss';
import Tour from '../Tour/Tour';
import { TourData } from '../TourData';


export default class TourList extends Component {
    state = {
        tours: TourData
    };
    removeTour = id => {
        console.log(id);

        const { tours } = this.state;
        const sortedTours = tours.filter(tour => tour.id !== id);
        this.setState({
            tours: sortedTours
        });
    };
    render() {
        const { tours } = this.state;
        return (
            <section className="tourlist">
                {tours.map(tour => (
                    <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
                ))}
            </section>
        );
    }
}