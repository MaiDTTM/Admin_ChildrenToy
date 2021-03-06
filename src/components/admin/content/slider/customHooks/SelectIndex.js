import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
// action
import * as SliderAction from 'src/action/sliderAction';

function useSelectIndex() {
    const dispatch = useDispatch();
    const listSlider = useSelector(state => state.Slider);
    let newList = [];
    const putIndex = (indexOld) => {
        newList = indexOld ? Object.keys(listSlider).filter((item) => (listSlider[item].index === indexOld)) : [];
        const idIndex = newList[0] || [];
        if (newList.length === 0) {
            return null;
        } else {
            const data = {
                "name": listSlider[idIndex].name,
                "image_link": listSlider[idIndex].image_link,
                "index": 0,
            };
            return dispatch(SliderAction.updateSliderAction({id: idIndex, data}))
        }
    };
    return {sizeList: newList.length, putIndex};
}

export default useSelectIndex;
