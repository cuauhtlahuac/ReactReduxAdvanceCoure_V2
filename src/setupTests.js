import Enzyme from 'enzyme';
//put the react version at the end
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
