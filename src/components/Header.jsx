import Search from "./Search"
import AddTask from "./AddTask"
import './Header.css'

export default function Header({onSearch, onCreate}) {
    return (
        <div className="header">
            <div className='search-container'>
                <Search onSearch={onSearch} />
            </div>
            <div className='add-task-container'>
                <AddTask onCreate={onCreate} />
            </div>
        </div>
    )
}
