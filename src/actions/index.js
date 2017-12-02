export const ADD_PROJECT = 'ADD_PROJECT'

export function addProject(name, description, created_on) {
    return { type: ADD_PROJECT, name, description, created_on }
}