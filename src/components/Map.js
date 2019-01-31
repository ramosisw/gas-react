import React, { Component } from 'react';
import { Map as GMap, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

import { config } from '../config';

const style = {
    width: '50vw',
    height: '75vh',
    'marginLeft': 'auto',
    'marginRight': 'auto'
}

export class Map extends Component {

    state = { userLocation: { lat: 32, lng: 32 }, loading: true };

    static defaultProps = {
        center: {
            lat: 29,
            lng: -110
        },
        zoom: 11
    };

    componentDidMount(props) {
        /*navigator.geolocation.watchPosition((position) => {
            //success
            const { latitude, longitude } = position.coords;

            this.setState({
                userLocation: { lat: latitude, lng: longitude },
                loading: false
            });
        }, () => {
            //error
            this.setState({ loading: false });
        }, () => {
            //options
        });*/
        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                console.log(position.coords);
                this.setState({
                    userLocation: { lat: latitude, lng: longitude },
                    loading: false
                });
            },
            () => {
                this.setState({ loading: false });
            }
        );
    }

    render() {
        const { loading, userLocation } = this.state;
        const { google } = this.props;
        return (
            <GMap style={style} google={google} zoom={14} initialCenter={userLocation}>

                {/*<Marker onClick={this.onMarkerClick} name={'Current location'} />*/}

                {/*<InfoWindow onClose={this.onInfoWindowClose}><div><h1>Title</h1></div></InfoWindow>*/}
            </GMap>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: config.apikey
})(Map)