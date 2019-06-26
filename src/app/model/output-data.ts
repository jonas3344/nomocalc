export interface OutputData {
  ref: {
    nomogram_sphere: Number,
    nomogram_cylinder: Number,
    nomogram_axis: Number,
    prediction_sphere: Number,
    prediction_axis: Number,
    prediction_cylinder: Number
  }
}


export const defaultOutputData: OutputData  = {
  ref: {
    nomogram_sphere: 0,
    nomogram_cylinder: 0,
    nomogram_axis: 0,
    prediction_sphere: 0,
    prediction_axis: 0,
    prediction_cylinder: 0
  }
}
