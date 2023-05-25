const ProjectNavigation = (navigate) => {
    const VisitBlabberDemo = () => {
        navigate("/blabber", {})
    }

    const GoProjectProfile = (page) =>
        navigate("/project_profile", {
                state: {
                    index: page,
                },
    })

    return {
        VisitBlabberDemo,
        GoProjectProfile, 
    }
}

export { ProjectNavigation }