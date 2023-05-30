const ProjectNavigation = (navigate) => {
    const VisitBlabberDemo = () => {
        navigate("/blabber", {})
    }

    const VisitEarthtoneDemo = () => {
        navigate("/earthtone", {})
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
        VisitEarthtoneDemo, 
    }
}

export { ProjectNavigation }