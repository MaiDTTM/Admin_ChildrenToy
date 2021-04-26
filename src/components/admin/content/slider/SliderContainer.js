// Redux
import { connect } from "react-redux";

// action type
import { SLIDER } from "src/action/actionTypes";

// components
import SliderAdmin from "./Slider.View";

const mapStateToProps = (state) => {
  const listSlider = state.Slider;
  return { listSlider };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getList: () => {
      return dispatch({ type: SLIDER.CALL_GET_LIST });
    },
  };
};

const SliderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SliderAdmin);

export default SliderContainer;
