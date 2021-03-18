import {QrCam} from "../_atomics/QrCam";
import React from "react";
import {QrImage} from "../_atomics/QrImage";

function Home() {
    return (
        <div>
            <h4 className="card-header">Accenture - QR Scanner</h4>
            <QrCam />
            <h3>ODER QR Bild Upload bei Inkompatibilität</h3>
            <QrImage />
        </div>
    );
}

export { Home };
