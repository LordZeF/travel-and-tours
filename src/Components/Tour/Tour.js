import React, { Component } from 'react';
import './Tour.scss';
//import b1 from '../img/boracay.jpg';

export default class Tour extends Component {
    state = {
        showInfo: false
    };
    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        });
    };
    render() {
        const { id, beach, img, name, info } = this.props.tour;
        const { removeTour } = this.props;
        return (
            <article className='tour'>
                <div className="img-container">
                    <img src={img} alt='tour spot' />
                    <span className="close-btn" onClick={() => {
                        removeTour(id);
                    }}>
                        <i className="fas fa-window-close"></i>
                    </span>
                </div>
                <div className="tour-info">
                    <h3>{beach}</h3>
                    <h4>{name}</h4>
                    <h5>info{""}
                        <span onClick={this.handleInfo}>
                            <i className="fas fa-caret-square-down" /></span>
                    </h5>
                    {this.state.showInfo && <p>{info}</p>}
                </div>
            </article>
        );
    }
};