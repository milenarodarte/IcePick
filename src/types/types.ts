export interface iUser {
  email:string,
  username:string,
  avatar:string,
  password?:string,
  id:number,
  favoriteSentences: iSentences[]
}

export interface iSentenceRequest{
  text:string,
  type: string,
}

export interface iLoginRequest {
  email: string;
  password: string;
}

export interface iLoginUser {
  user: string;
  id: number;
}
export interface iLoginResponse {
  accessToken: string;
  user: iUser;
}
export interface iRegisterRequest {
  email: string;
  password: string;
  passwordConfirm?: string;
  username: string;
  avatar: string;
  favoriteSentences: iSentences[];
}

export interface iEditRequest {
  email?: string;
  password?: string;
  username?: string;
  passwordConfirm?:string;
  avatar?: string;
  favoriteSentence?:iSentences[]
}

export interface iSentences {
  userId: number;
  type: string;
  text: string;
  like: number;
  id: number;
  liked:boolean;
}

export interface iSentencesAdd {
  userId: number;
  type: string;
  text: string;
  like: number;
  liked:boolean;
}

export interface iContextProps {
  children: React.ReactNode;
}

export interface iLoadingContext{
  loading: boolean,
  toggleLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export interface iUserContext {
  user: iUser| undefined;
  token: string,
  register: (data: iRegisterRequest) => void;
  deletet: (id: number) => void;
  edit: (id: number, data: iEditRequest) => void;
  login: (data: iLoginRequest) => Promise<void>;
  logout: () => void;
  get: (id: number) => void;
  loadingPage: boolean;
  setUser: React.Dispatch<React.SetStateAction<iUser | undefined>>
}

export interface iStyledInputProps {
  isValid: boolean;
  isDirty: boolean;
}