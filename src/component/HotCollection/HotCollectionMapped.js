import React from "react";
import "./HotCollection.css";
import HotCollection from "./HotCollection";
import one from "../../assets/HotCollectionImages/jakob-owens-BqSACXqDbBU-unsplash 1.png";
import oneone from "../../assets/HotCollectionImages/pexels-melvin-buezo-2733938 1.png";
import onetwo from "../../assets/HotCollectionImages/clark-van-der-beken-1KBCgRD8BDc-unsplash 1.png";
import onethree from "../../assets/HotCollectionImages/gustavo-centurion-O6fs4ablxw8-unsplash 1.png";
import two from "../../assets/HotCollectionImages/fly-d-FyN1SrqrTzQ-unsplash 1.png";
import twoone from "../../assets/HotCollectionImages/efe-kurnaz-RnCPiXixooY-unsplash 1.png";
import twotwo from "../../assets/HotCollectionImages/pexels-anni-roenkae-2832382 1.png";
import twothree from "../../assets/HotCollectionImages/danny-lines-dwjfddeDBZs-unsplash 1.png";
import three from "../../assets/HotCollectionImages/fuu-j-Lo7venJ_ywM-unsplash 1.png";
import threeone from "../../assets/HotCollectionImages/michael-dziedzic--LFxVNhopfs-unsplash 1.png";
import threetwo from "../../assets/HotCollectionImages/yuval-zukerman-WuBLpWcidsU-unsplash 1.png";
import threethree from "../../assets/HotCollectionImages/fuu-j-KRztl5I6xac-unsplash 1.png";
const HotCollectionMapped = () => {
  return (
    <div className="HotCollectionOutterMost">
      <p className="HotCollection__textHot">Hot Collection</p>
      <div className="HotCollection__GridSystem">
        <div>
          <HotCollection
            one={one}
            oneone={oneone}
            onetwo={onetwo}
            onethree={onethree}
          />
        </div>
        <div>
          <HotCollection
            one={two}
            oneone={twoone}
            onetwo={twotwo}
            onethree={twothree}
          />
        </div>
        <div>
          <HotCollection
            one={three}
            oneone={threeone}
            onetwo={threetwo}
            onethree={threethree}
          />
        </div>
      </div>
    </div>
  );
};

export default HotCollectionMapped;
