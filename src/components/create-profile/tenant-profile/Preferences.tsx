import { Checkbox } from "antd";
import * as React from "react";

export const Preferences = () => (
    <div>
        <div>
            <h4>Looking For</h4>
            <div>
                <li>
                    <ul><label>WG</label> <Checkbox /></ul>
                    <ul><label>Apartment</label> <Checkbox /></ul>
                    <ul><label>House</label> <Checkbox /></ul>
                </li>
            </div>
        </div>
        <div>
            <h4>Preferences</h4>
            <div>
                <label>Budget Limitation</label>
                <label>Length of Lease</label>
                <label>On-site Parking</label>
                <label>On-site Storage</label>
            </div>
        </div>
    </div>
);
