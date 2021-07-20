import React  from 'react';
import ProgressBar from './ProgressBar';

export default function FirstRun(props) {
  return (
    <div
    className={
     props.IsFirstRun ? "show pagefirstloading" : "opaq0 hide"
    }
  >
    <div className="text-center">İlk Açılış ayarlanıyor</div>
    <div className="prf ProgressSpinnerFlat" role="progressbar">
      <ProgressBar isVisible={true}/>

    </div>
  </div>
  );
}
