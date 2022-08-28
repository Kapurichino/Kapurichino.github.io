import {Form, Button} from 'react-bootstrap'
import app from '../App.module.css'

function CustomSearchBar(){
    return(
        <div className={app.searchBar}>
            <Form className="d-flex" >
                <Form.Control
                type="search"
                placeholder="Search"
                className={app.barControl}
                aria-label="Search"
                />
                <Button className={app.searchButton}>Search</Button>
            </Form>
        </div>
    )
}

export default CustomSearchBar