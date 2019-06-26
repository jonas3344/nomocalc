export interface InputData {
  date_birth_year: Number;
  date_birth_month: Number;
  date_birth_day: Number;
  manifest_sphere: Number;
  manifest_cylinder: Number;
  manifest_axis: Number;
  method: String;
  laser_excimer: String;
  laser_mode: String;
  intervention: String;
  laser_optical_zone: Number;
  target_sphere: Number;
  target_cylinder: Number;
}

export const defaultInputData: InputData = {
  date_birth_year: 1970,
  date_birth_month: 5,
  date_birth_day: 3,
  manifest_sphere: -5.5,
  manifest_cylinder: -1.35,
  manifest_axis: 90,
  method: 'LASIK',
  laser_excimer: 'WaveLight EX500',
  laser_mode: 'WFO',
  intervention: 'first',
  laser_optical_zone: 6,
  target_sphere: 0,
  target_cylinder: 0
};
