import React, { useEffect } from "react";
import {
  deleteApiRequest,
  getApiRequest,
  postApiRequest,
  putApiRequest,
} from "../../Actions";
import { useDispatch, useSelector } from "react-redux";

const DashBoard = () => {
  const dispatch = useDispatch();
  const getApiData = useSelector((state) => state.getApiReducer);
  const postApiData = useSelector((state) => state.postApiReducer);
  const putApiData = useSelector((state) => state.putApiReducer);
  const deleteApiData = useSelector((state) => state.deleteApiReducer);

  useEffect(() => {
    dispatch(getApiRequest());
    dispatch(deleteApiRequest(2));
    dispatch(
      putApiRequest({
        id: 2,
        body: {
          name: "om",
          job: "well",
        },
      })
    );
    dispatch(
      postApiRequest({
        name: "omkar",
        job: "leader",
      })
    );
  }, []);

  return <div className="text-center">DASHBOARD COMPONENT</div>;
};

export default DashBoard;
