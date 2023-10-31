import roles from "@/data/roles";

export const getRoleBySlug = (slug: string) => {
    return roles.find((role) => role.slug === slug);
}