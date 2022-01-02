type UpdateProduct = Partial<Product>

function updateProductItem(productItem:Partial<Product>) {
  
}
interface UserProfile {
  username : string;
  email: string;
  profilePhotoUrl : string;
}
// 1번 방식
type UserProfileUpdate = {
  username : UserProfile['username'];
  email: UserProfile['email'];
  profilePhotoUrl : UserProfile['profilePhotoUrl'];
}
//2. in 반복문이 돌면서 값을 추가해줌 = mapped type
type UserProfileUpdate2 = {
  [p in 'username' | 'email' | 'profilePhotoUrl'] ?: UserProfile[p];
}
// key만 반환
type UserProfileKeys = keyof UserProfile

//3. 
type UserProfileUpdate3 = {
  [p in keyof UserProfile] ?: UserProfile[p];
}

//4. 
type Subset<T> = {
  [p in keyof T] ?: T[p];
}