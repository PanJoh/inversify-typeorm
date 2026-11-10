export function getRepositoryToken(entity: Function): string {
    return `${entity.name}Repository`;
}