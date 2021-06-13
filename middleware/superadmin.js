export default function({ $strapi, redirect }) {
    if (!$strapi.user.satoken) {
        redirect('/note')
    }
}