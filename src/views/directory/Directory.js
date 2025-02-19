    import React from 'react'
    import MainCard from 'ui-component/cards/MainCard'
    import Cardcontainer from 'ui-component/cardcontainer/Cardcontainer'
    import { useSelector, useDispatch } from 'react-redux'
    import { useEffect , useState} from 'react'
    import { fetchEmployee } from 'redux/action/actions'
    import UseFormControl from 'ui-component/input/input'
    import './style.css'
    export default function Directory() {
        const employe = useSelector((state) => state.fetchEmployeeReducer.data)
        const dispatch = useDispatch()
        const [searchQuery, setSearchQuery] = useState('');
        const [filteredEmployees, setFilteredEmployees] = useState([]);
        useEffect(() => {
            dispatch(fetchEmployee())

        }, [])
        useEffect(() => {
            setFilteredEmployees(
                employe?.filter((employe) =>
                employe.fullName.toLowerCase().includes((searchQuery || '').toLowerCase())
              ) || []
            );
          }, [searchQuery, employe]);
        
          const handleSearch = (event) => {
            const query = event.target.value;
            setSearchQuery(query);
        };
    
        return (
            <MainCard title="Directory">
                <div className='employee-search'>
                <UseFormControl    type="search" onChange={handleSearch} label="Search Employees"/>
                </div>
                <Cardcontainer employeesData={filteredEmployees} />
            </MainCard>
        )
    }
