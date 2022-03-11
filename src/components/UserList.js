import React, {useEffect} from "react";
import {fetchAllUsers} from '../store/slices/users'
import {useDispatch, useSelector} from 'react-redux'

export default function UserList() {

const {list: users} = useSelector(state => state.users)
const dispatch = useDispatch()

	useEffect(() => {
		dispatch(	fetchAllUsers())
},[ dispatch ])

	return (
		<div className = "container mt-4">
			<div className = "row">
				{
					users.map((user, id) => (
						<div className="col-md-3 mb-4"	key = {id}>
							<div className="card">
								<img src={user.avatar} alt="avatar"/>
								<div className="card-body">
									<h5 className="card-title">{`${user.first_name} ${user.last_name}`}</h5>
									<p className="card-text">{`${user.email}`}</p>
								</div>
							</div>
						</div>
					))
				}
  		</div>
		</div>
	);
};