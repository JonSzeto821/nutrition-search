import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Stepzilla from 'react-stepzilla';
import Notification from '../../components/notification';
import Step1 from '../../components/steps/step1';
import Step2 from '../../components/steps/step2';
import Step3 from '../../components/steps/step3';
import {
  submit,
  setRestaurant,
  setCals,
  getFoodItems,
  applyFilter
} from '../../actions/formActions';
import {
  prevPage,
  nextPage,
  handleClick
} from '../../actions/paginationActions';
import { addToTotal, removeItem } from '../../actions/macroTotalActions';
import '../../styles/prog-tracker.css';
import '../../styles/step1/step1.css';
import '../../styles//step2/step2.css';

const Home = props => {
  const steps = [
    {
      name: 'Search Restaurant',
      component: (
        <Step1
          submit={props.submit}
          setRestaurant={props.setRestaurant}
          restaurant={props.restaurant}
          brands={props.brands}
          jumpToStep={props.jumpToStep}
        />
      )
    },
    {
      name: 'Calorie Input',
      component: (
        <Step2
          setCals={props.setCals}
          calories={props.calories}
          getFoodItems={props.getFoodItems}
          prevPage={props.prevPage}
          nextPage={props.nextPage}
          handleClick={props.handleClick}
          restaurant={props.restaurant}
          pagination={props.pagination}
          foodItems={props.foodItems}
          addToTotal={props.addToTotal}
          applyFilter={props.applyFilter}
        />
      )
    },
    {
      name: 'Review',
      component: (
        <Step3
          selectedItems={props.selectedItems}
          totals={props.totals}
          removeItem={props.removeItem}
          addToTotal={props.addToTotal}
        />
      )
    }
  ];

  return (
    <div>
      <div>
        <Notification />
      </div>
      <div className="step-progress">
        <Stepzilla stepsNavigation={false} steps={steps} props={props} />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  foods: state.reducer.foods,
  brands: state.reducer.brands,
  restaurant: state.reducer.restaurant,
  calories: state.reducer.calories,
  initialFoodItems: state.reducer.initialFoodItems,
  foodItems: state.reducer.foodItems,
  value: state.reducer.value,
  pagination: state.reducer.pagination,
  selectedItems: state.reducer.selectedItems,
  totals: state.reducer.totals
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      submit,
      setRestaurant,
      setCals,
      getFoodItems,
      applyFilter,
      prevPage,
      nextPage,
      handleClick,
      addToTotal,
      removeItem,
      changePage: () => push('/about-us')
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
