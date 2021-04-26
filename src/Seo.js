import React from 'react';

class BasicAd extends React.Component {
    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render() {
        return (
            <ins
                className="adsbygoogle"
                data-ad-client="ca-pub-2616710485643965"
                // data-ad-client="ca-pub-4591861188995436"
                data-ad-slot="4640466102"
                style={{ display: "inline-block", backgroundColor: 'blue',height: 250, width: 300 }}
            />
        );
    }
}
export default BasicAd;
