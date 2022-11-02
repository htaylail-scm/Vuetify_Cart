export const addNotification = ({ commit }, notification) => {
    commit ('pushNotification', notification)
}

export const removeNotification = ({commit}, notification ) => {
    commit ('removeNotification', notification)
}