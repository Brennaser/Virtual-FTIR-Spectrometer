// style
import { useSelector } from "react-redux";
import "../style/components/Print.css";

// CSV
import { CSVDownload } from "react-csv";
import { useState } from "react";

export default function Save() {

    const { peaksData } = useSelector((store) => store.peaksData);
    const { backgroundData } = useSelector((store) => store.backgroundData);
    const { spectrumData } = useSelector((store) => store.spectrumData);

    const [data, setData] = useState();
    const [printPeaks, setPrintPeaks] = useState(false);
    const [printAbsorb, setPrintAbsorb] = useState(false);

    const peaksCSV = () => {

        setPrintAbsorb(false); 
        let newData = [];

        for (const [peak, intensity] of Object.entries(peaksData.peaks)) {
            newData.push([peak, intensity]);
        }

        setData(newData);
        setPrintPeaks(true);
    }


    const absorbCSV = () => {

        setPrintPeaks(false);
        let newData = [];

        for (let i = 0; i < spectrumData.x.length; i++) {
          let newY = -1 * Math.log(spectrumData.y[i] / backgroundData.y[i]);
          newData.push([spectrumData.x[i], newY]);
        }

        setData(newData);
        setPrintAbsorb(true);
    }


    return (
        <div>
            {/* NOTE: cannot control filenames at the moment */}
            {printPeaks && <CSVDownload data={data} target="."/>}
            {printAbsorb && <CSVDownload data={data} target="."/>}

            <button 
                className="button"
                onClick={peaksCSV}
            >
                Save Peaks Data
            </button>

            <button 
                className="button"
                onClick={absorbCSV}
            >
                Save Absorbance Spectrum Data
            </button>
        </div>
        
    );


}