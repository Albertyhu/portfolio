const ProjectNavigation = (navigate) => {
    const VisitBlabberDemo = () => {
        navigate("/blabber")
    }

    const VisitEarthtoneDemo = () => {
        navigate("/earthtone")
    }

    const VisitRedditDemo = () => {
        navigate("/reddit")
    }

    const VisitChatAppDemo = () => {
        navigate("/chat-app")
    }

    const GoProjectProfile = (page) =>
        navigate("/project_profile", {
                state: {
                    index: page,
                },
    })

    const VisitDesignInitiativeDemo = () =>{
        navigate("/design-initiative")
    }

    return {
        VisitBlabberDemo,
        GoProjectProfile, 
        VisitEarthtoneDemo,
        VisitRedditDemo, 
        VisitChatAppDemo,
        VisitDesignInitiativeDemo, 
    }
}

export { ProjectNavigation }