export default function NoSearchTaskFound({searchText}){
    return (
        <p className="text-center text-3xl">No Tasks Found for <blockquote className="text-teal-400 inline-block">&quot;{searchText}&quot;</blockquote></p>
    );
}