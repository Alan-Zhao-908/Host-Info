import React, {Suspense}  from "react";
import '../../dist/style.css'

// supports async import of the container which is not visible for user on initial render
const MapContainer = React.lazy(() => import("../components/map.jsx"));

//////////////////
/// Neighborhood//
//////////////////
// Following component renders a Neighborhood description. Including the location [via Googlemaps API and info about rules and policies of the apt]

/////////////////
///  Props    ///
/////////////////
// The only prop it receives is the host object 


/////////////////
///  Methods  ///
/////////////////
// Has few similar methods: [showingMoreRules, showingMorePolicies,  showingMoreAboutNeighborhood] responsible for conditional
// rendering (e.g showing more or less information dropdowns)

class Neighborhood extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showingMoreRules: false,
      showingMorePolicies: false,
      showingMoreAboutNeighborhood: false
    };

    // these methods are responsible for slide-downs [e.g show more info]
    this.showMoreRules = this.showMoreRules.bind(this);
    this.showMorePolicies = this.showMorePolicies.bind(this);
    this.showMoreAboutNeighborhood = this.showMoreAboutNeighborhood.bind(this);

    this.showLessRules = this.showLessRules.bind(this);
    this.showLessPolicies = this.showLessPolicies.bind(this);
    this.showLessAboutNeighborhood = this.showLessAboutNeighborhood.bind(this);
  }

  /////// Rules ////////
  showMoreRules() {
    this.setState({
      showingMoreRules: true
    });
  }

  showLessRules() {
    this.setState({
      showingMoreRules: false
    });
  }


   /////// Policies ////////
  showMorePolicies() {
    this.setState({
      showingMorePolicies: true
    });
  }

  showLessPolicies() {
    this.setState({
      showingMorePolicies: false
    });
  }

  
   /////// More about Neighborhood  ////////
  showMoreAboutNeighborhood() {
    this.setState({
      showingMoreAboutNeighborhood: true
    });
  }

  showLessAboutNeighborhood() {
    this.setState({
      showingMoreAboutNeighborhood: false
    });
  }


  render() {
    return (

      <div className="mainDivNeighborhood">

        <div style={{ marginTop: "-50px" }}>

          <h2> The neighborhood </h2>

          <span>
            {this.props.host.name}'s home is located in {this.props.host.city}.{" "}
          </span>

          <p>{this.props.host.neighborhoodDescr || this.props.host.neighborhooddescr}</p>

          {/*  conditional rendering for more info */}
          {!this.state.showingMoreAboutNeighborhood || !this.state.showingmoreaboutneighborhood ? (

            // initial page render the info is hidden
            <span
              className="showMoreOrLess"
              onClick={this.showMoreAboutNeighborhood || this.showmoreaboutneighborhood}
            >
              Read more about the neighborhood ▿ <br />
            </span>

          ) : (
            // after clicking 'Show more' renders following: 
            <p>
              <span>
                <b>Getting around</b> 
                {/* showing the places nearby, how long it takes to get there ang how much it costs
                Does not make any request.. data is random */}
              </span>

              <br />
              <br />

              {this.props.host.locationsNearby ? this.props.host.locationsNearby.split(" ").map(place => {
                return (
                  <li>
                    {place} Overall-Time : {this.props.host.commuteTimeAvg}{" "}
                    minutes average price: {this.props.host.commutePriceAvg}{" "}
                    {this.props.host.localCurrency}{" "}
                  </li>
                );

              }) : this.props.host.locationsnearby.split(" ").map(place => {
                return (
                  <li>
                    {place} Overall-Time : {this.props.host.commutetimeavg}{" "}
                    minutes average price: {this.props.host.commutepriceavg}{" "}
                    {this.props.host.localcurrency}{" "}
                  </li>
                );

              }) }

              <br />

              <span
                className="showMoreOrLess"
                onClick={this.showLessAboutNeighborhood || this.showlessaboutneighborhood}
              >
                Hide ^
              </span>
            </p>
          )}

        </div>

        <div>
          {/* part responsible for rendering map */}
          <div>
             {/* if component is not yet loaded shows 'Loading..' message */}
            <Suspense fallback={<div>Loading...</div>}> 
              <MapContainer
                className="mapContainer"
                location={this.props.location}
              />
            </Suspense>
          </div>

          <div className="cancelationsPolicies">
            <hr/>
            <h2>Policies</h2>
              <h3>House rules</h3>

            <p>{this.props.host.policies}</p>

            {!this.state.showingMorePolicies || !this.state.showingmorepolicies ? (

              <span className="showMoreOrLess" onClick={this.showMorePolicies || this.showmorepolicies}>
                Read all rules ▿ <br />
              </span>

            ) : (

              <p>
                {this.props.host.policies}
                <br />

                <span
                  className="showMoreOrLess"
                  onClick={this.showLessPolicies || this.showlesspolicies}
                >
                  Hide ^
                </span>

              </p>
            )}

            <hr/>


            <h3>Cancellations</h3>
             {/* bellow checks whether host has strict cancelation rules */}
            {this.props.host.isCanc || this.props.host.iscanc ? (

              <div>

                <span>
                  <b>Strict - Free cancellation for 48 hours</b>
                </span>

                <p>
                  After that, cancel up to 7 days before check-in and get a 50%
                  refund, minus the service fee.
                </p>


                {!this.state.showingMoreRules || !this.state.showingmorerules ? (

                  <span className="showMoreOrLess" onClick={this.showMoreRules || this.showmorerules }>
                    Read more about the rules ▿ <br />
                  </span>

                ) : (

                  <div>
                    {this.props.host.neighborhoodDescr || this.props.host.neighborhooddescr}
                    <br />

                      <a
                        className="showMoreOrLess"
                        href="https://www.airbnb.com/home/cancellation_policies?guest_fee_policy=grace_period_48_hours#strict-with-grace-period"
                      >
                        Learn more
                      </a>
                      <br />

                      <span
                      className="showMoreOrLess"
                      onClick={this.showLessRules || this.showlessrules}
                    >
                      Hide ^
                    </span>
                  </div>

                )}
              </div>
            ) : (

              <div>
                <span>Free cancellation at any time</span>

                {!this.state.showingMoreRules || !this.state.showingmorerules ? (

                  <span className="showMoreOrLess" onClick={this.showMoreRules || this.showmorerules}>
                    Read more about the rules ▿ <br />
                  </span>

                ) : (

                  <div>

                    <br />

                    <span
                      className="showMoreOrLess"
                      onClick={this.showlessRules || this.showlessrules}
                    >
                      <a
                        className="showMoreOrLess"
                        href="https://www.airbnb.com/home/cancellation_policies?guest_fee_policy=grace_period_48_hours#strict-with-grace-period"
                      >
                        Learn more
                      </a>
                      <br />
                      Hide ^
                    </span>

                  </div>

                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Neighborhood;
