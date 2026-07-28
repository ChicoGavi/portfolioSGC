import {useEffect, useState} from "react";

const useProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/ChicoGavi/repos')
            .then(res => res.json())
            .then(data => setProjects(data))
            .catch(err => console.log(err));
    }, []);


    return projects;
}


export default useProjects