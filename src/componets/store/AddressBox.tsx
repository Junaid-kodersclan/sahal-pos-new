import { Country, State, City } from "country-state-city";
import InputWithDropdown from "./InputWithDropdown";
import { FormikErrorType } from "@/helper/types";
import { appStyles } from "@/theme/appStyles";
import Textarea from "../common/Textarea";
import { FocusEventHandler } from "react";
import _ from "lodash";

type PropsType = {
  values: any;
  setFieldValue: Function;
  errors: FormikErrorType | any;
  handleBlur: FocusEventHandler<HTMLInputElement>;
};

export default function AddressBox(props: PropsType) {
  const { values, errors, handleBlur, setFieldValue } = props;

  // handle get countries
  const countries = Country.getAllCountries();

  // handle update countries
  const updatedCountries: any[] = countries.map((country) => {
    return {
      label: country.name,
      value: country.isoCode,
      countryCode: country.isoCode,
      ...country,
    };
  });

  const handleGetState = (countryCode: string) => {
    if (_.isEmpty(countryCode)) return;
    const updatedStates: any[] = State.getStatesOfCountry(countryCode).map(
      (state) => {
        return {
          label: state.name,
          value: state.isoCode,
          ...state,
        };
      }
    );
    return updatedStates;
  };

  // handle get cities
  const handleGetCities = (countryCode: string, stateCode: string) => {
    if (_.isEmpty(countryCode)) return;
    const updatedCities: any[] = City.getCitiesOfState(
      countryCode,
      stateCode
    ).map((city) => {
      return {
        label: city.name,
        value: city.name,
        ...city,
      };
    });

    return updatedCities;
  };

  return (
    <section className={appStyles.ADD_PRODUCT_BOX}>
      <div className={appStyles.BOX_TITLE_WRAPPER}>
        <h3 className={appStyles.BOX_TITLE}>Address</h3>
        <p className={appStyles.BOX_DESC}>
          Add your physical shop address from here
        </p>
      </div>
      <div className={`${appStyles.CONTENT_BOX_WRAPPER}`}>
        <InputWithDropdown
          name="country"
          label="Country"
          error={errors.country}
          value={values.country}
          handleBlur={handleBlur}
          options={updatedCountries}
          setFieldValue={setFieldValue}
        />
        <InputWithDropdown
          name="state"
          label="State"
          error={errors.state}
          value={values.state}
          handleBlur={handleBlur}
          setFieldValue={setFieldValue}
          options={handleGetState(values?.country?.countryCode)}
        />
        <InputWithDropdown
          name="city"
          label="City"
          error={errors.city}
          value={values.city}
          handleBlur={handleBlur}
          setFieldValue={setFieldValue}
          options={handleGetCities(
            values?.country?.countryCode,
            values?.state?.value
          )}
        />
        <Textarea name="address" label="Address" error={errors.address} />
      </div>
    </section>
  );
}
