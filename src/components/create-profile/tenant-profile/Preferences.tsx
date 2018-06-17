import { Checkbox, Input } from "antd";
import * as React from "react";

export const Preferences = () => (
    <div>
        <div>
            <h4>Looking For</h4>
            <div>
                <ul>
                    <li><label>WG</label> <Checkbox /></li>
                    <li><label>Apartment</label> <Checkbox /></li>
                    <li><label>House</label> <Checkbox /></li>
                </ul>
            </div>
        </div>
        <div>
            <h4>Preferences</h4>
            <div>
        <label>Budget Limitation</label> <Input type="range" min="0" max="2500" step="20" />
        <label>Length of Lease</label> <Input type="range" min="6" max="36" step="6" />
        <label>
          <span>On-site Parking</span>
          <input type="checkbox" value="checked" />
        </label>
        <label>
          <span>On-site Storage</span>
          <input type="checkbox" value="checked" />
        </label>
            </div>
        </div>
    </div>
);
