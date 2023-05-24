const ProjectNavigation = (navigate) => {
    const VisitBlabberDemo = () => {
        navigate("/blabber", {})
    }
    return {
        VisitBlabberDemo,
    }
}

export { ProjectNavigation }