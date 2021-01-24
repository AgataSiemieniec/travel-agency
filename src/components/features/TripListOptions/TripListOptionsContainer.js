import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {
  getAllFilters,
  changeSearchPhrase,
  addTag,
  removeTag,
  changeSearchDuration,
} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
}); // jakiej części danych potrzebujemy ze sklepu

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // DONE - TODO - add more dispatchers for other filters
  addTag: tag => dispatch(addTag(tag)),
  removeTag: tag => dispatch(removeTag(tag)),
  changeSearchDuration: value => dispatch(changeSearchDuration(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
