import React from "react";

export class HomePage extends React.Component {

  render() {
    return (
      <div id="homePage">
        <div className="columns">
          <div className="card column is-full-mobile is-two-thirds-desktop">
            <h3>Parking Appeals Process</h3>
            <h4>Tickets & Fines</h4>
            <p>
              All faculty, staff, students, affiliates, vendors, and visitors are responsible for all tickets incurred by them, vehicles under their control, or their visitors.
              Permit and lot regulations are in effect year round, Monday through Friday from <b>8:00 a.m. to 5:00 p.m.</b> Service, handicap, public safety, and restricted parking areas are enforced 24 hours a day.
            </p>
            <h4 style={{marginTop: "50px"}}>Appealing a Ticket</h4>
            <p>
              This website and appeals filed herein are for <b>students only</b>. All appeals will be reviewed by members of the Student Motor Vehicle Court. The Student Motor Vehicle Court is a subordinate judicial body of the
              Rensselaer Judicial Board and hears appeals for parking and other motor vehicle violations of current RPI students.</p><p>All ticket payments and appeals must be received at the Parking & Transportation Office <b>within 10 calendar days</b> of issue.
            </p>
            <div className="indent">
              <h5 style={{marginTop: "20px"}}>Student Appeals</h5>
              <p>One “no permit or wrong permit for lot displayed” violation will be forgiven and can be appealed using this website.  Vehicles booted for delinquent tickets lose the right to appeal those tickets.</p>
              <h5 style={{marginTop: "20px"}}>Visitor Appeals</h5>
              <p>One "no permit or wrong permit for lot displayed" violation will be forgiven and can be appealed using the visitor appeals form.</p>
            </div>
          </div>
          <div className="card column">
            <h3>Fines</h3>
            <ul>
              <li>Expired Meter/Hangtag Not Displayed: <b>$11</b></li>
              <li>Wrong Permit or No Permit: <b>$31</b></li>
              <li>Travel Lane or Parking Prohibited: <b>$31</b></li>
              <li>Fire Lanes and Fire Hydrants: <b>$41</b></li>
              <li>Hindering Snow Removal: <b>$41</b></li>
              <li>Failure to comply with a traffic device. <b>$101</b></li>
              <li>Disabled (Handicapped): <b>$101</b></li>
              <li>Unauthorized use of Permit/Hang tag: <b>$151</b></li>
              <li>All other violations*: <b>$151</b></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

}