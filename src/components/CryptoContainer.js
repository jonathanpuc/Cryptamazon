import React, {Component} from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import FetchCoinData from './../actions/FetchCoinData';

import CoinCard from './CoinCard';

class CryptoContainer extends Component {

    componentDidMount() {
        this.props.FetchCoinData();
    }
    render() {

        const { crypto } = this.props;
        return (
            <View>
        {crypto.isFetching ? 
        
            
                <Spinner
                    visible={crypto.isFetching}
                    textContent={"Loading..."}
                    textStyle={{color: "#253145"}}
                    animation="fade"
                    />
                
        :       
                <ScrollView contentContainerStyle={contentContainer}>
                {this.renderCoinCards()}
                </ScrollView>

        }
        </View>
    )

    }

    renderCoinCards = () => {
        const { crypto } = this.props;
        return crypto.data.map((coin, index) => <CoinCard coin={coin} key={index}/>);
    }
}

const styles = {
    contentContainer: {
        paddingBottom: 100,
        paddingTop: 55
    }
}

const { contentContainer } = styles;

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps, {FetchCoinData})(CryptoContainer)