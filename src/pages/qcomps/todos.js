const baseUrl = 'https://i.imgur.com/';
const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  // 动态构造图片的完整URL
  const imageUrl = `${baseUrl}${person.imageId}${person.imageSize}.jpg`;

  return (
    <div style={person.theme}>
      {/* 动态插入person.name到标题 */}
      <h1>{person.name}'s Todos</h1>
      {/* 使用动态imageUrl和alt属性 */}
      <img className="avatar"
           src={imageUrl}
           alt={`${person.name}`}
      />
    </div>
  );
}
