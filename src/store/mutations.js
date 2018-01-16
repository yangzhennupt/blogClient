export const MUTATIONS = {
		getAll(state, obj) {
			state.sliderList = obj.data.data.slider;
			state.radioList = obj.data.data.radioList;
		}
	}