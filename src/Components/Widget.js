import styled from 'styled-components';

const Widget = styled.div`
margin-top: 24px;
margin-bottom: 24px;
border: 1px solid ${({ theme }) => theme.colors.primary};
background-color: ${({ theme }) => theme.colors.mainBg};
border-radius: 4px;
overflow: hidden;
text-align: center;

h1,h2,h3 {
  font-size: 23px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 0;
  color:white;
  font-family: 'Economica', sans-serif;

}

h1, h3 {
  color:black !important;
}

p {
  font-size: 18px;
  font-weight: 400;
  line-height: 1;
  font-family: 'Economica', sans-serif;
}
`;

Widget.Header = styled.header`
display: flex;
justify-content: flex-start;
align-items: center;
padding: 18px 32px;
background-color: ${({ theme }) => theme.colors.primary};

* {
  margin: 0;
}
`;

Widget.Content = styled.div`
padding: 24px 32px 32px 32px ;
& > *:first-child {
  margin-top: 0;
}
& > *:last-child {
  margin-bottom: 0;
}

ul {
  list-style: none;
  padding: 0;
}
`;
Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block;
  
  &:hover{
    opacity: .5;
    box-shadow: rgb(34, 34, 34) 2px 2px 2px;
    transform: translate(-10px);
  }
  &:focus {
    opacity: .5;
  }
`;
export default Widget; 